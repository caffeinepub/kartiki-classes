import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Document, OTPEntry } from "../backend.d";
import { useActor } from "./useActor";

export function useDocumentsBySection(section: string, enabled = true) {
  const { actor, isFetching } = useActor();
  return useQuery<Document[]>({
    queryKey: ["documents", section],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDocumentsBySection(section);
    },
    enabled: !!actor && !isFetching && enabled,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePendingOTPs() {
  const { actor, isFetching } = useActor();
  return useQuery<OTPEntry[]>({
    queryKey: ["pendingOTPs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPendingOTPs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRequestOTP() {
  const { actor } = useActor();
  return useMutation<OTPEntry, Error, { regNo: string; classSection: string }>({
    mutationFn: async ({ regNo, classSection }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.requestOTP(regNo, classSection);
    },
  });
}

export function useVerifyOTP() {
  const { actor } = useActor();
  return useMutation<boolean, Error, { regNo: string; otp: string }>({
    mutationFn: async ({ regNo, otp }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.verifyOTP(regNo, otp);
    },
  });
}

export function useAddDocument() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation<
    void,
    Error,
    { title: string; description: string; fileUrl: string; section: string }
  >({
    mutationFn: async ({ title, description, fileUrl, section }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addDocument(title, description, fileUrl, section);
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["documents", vars.section] });
      qc.invalidateQueries({ queryKey: ["documents"] });
    },
  });
}

export function useDeleteDocument() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation<void, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteDocument(id);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["documents"] });
    },
  });
}

import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type Document = {
    id : Nat;
    title : Text;
    description : Text;
    fileUrl : Text;
    section : Text;
    createdAt : Int;
  };

  module Document {
    public func compare(document1 : Document, document2 : Document) : Order.Order {
      Text.compare(document1.section, document2.section);
    };
  };

  type OTPEntry = {
    registrationNumber : Text;
    classSection : Text;
    otp : Text;
    createdAt : Int;
  };

  public type UserProfile = {
    name : Text;
    registrationNumber : ?Text;
    classSection : ?Text;
  };

  let documents = Map.empty<Nat, Document>();
  var nextDocumentId = 0;

  let otpEntries = Map.empty<Text, OTPEntry>();

  let userProfiles = Map.empty<Principal, UserProfile>();

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Study Materials Management
  public query ({ caller }) func getDocumentsBySection(section : Text) : async [Document] {
    documents.values().toArray().filter(func(d) { d.section == section });
  };

  public shared ({ caller }) func addDocument(title : Text, description : Text, fileUrl : Text, section : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add documents");
    };

    let document : Document = {
      id = nextDocumentId;
      title;
      description;
      fileUrl;
      section;
      createdAt = Time.now();
    };

    documents.add(nextDocumentId, document);
    nextDocumentId += 1;
  };

  public shared ({ caller }) func deleteDocument(documentId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete documents");
    };

    documents.remove(documentId);
  };

  // OTP Verification System
  public shared ({ caller }) func requestOTP(registrationNumber : Text, classSection : Text) : async OTPEntry {
    let otp = Int.abs(Time.now()) % 1000000;
    let otpEntry = {
      registrationNumber;
      classSection;
      otp = otp.toText();
      createdAt = Time.now();
    };
    otpEntries.add(registrationNumber, otpEntry);
    otpEntry;
  };

  public shared ({ caller }) func verifyOTP(registrationNumber : Text, inputOTP : Text) : async Bool {
    switch (otpEntries.get(registrationNumber)) {
      case (null) { false };
      case (?otpEntry) {
        let isValid = (otpEntry.otp == inputOTP) and (Time.now() - otpEntry.createdAt < 30000000000);
        if (isValid) { otpEntries.remove(registrationNumber) };
        isValid;
      };
    };
  };

  public query ({ caller }) func getPendingOTPs() : async [OTPEntry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can retrieve pending OTPs");
    };
    otpEntries.values().toArray();
  };
};

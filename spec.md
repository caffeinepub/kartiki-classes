# Kartiki Classes

## Current State
New project, no existing code.

## Requested Changes (Diff)

### Add
- Home page with class sections: 8th, 9th, 10th, and other sections
- 8th, 9th, 10th class sections: Registration Number + OTP verification flow to access study material
- Other sections (e.g., General, Notes, etc.): Direct access to study material, no login required
- OTP generation and verification logic in backend
- Student registration number validation
- Study material listing per class/section
- Admin can add study materials (PDF links, notes titles) for each section

### Modify
- None

### Remove
- None

## Implementation Plan
1. Backend: Student registration store, OTP generation/verification, study material CRUD per section
2. Frontend: Home page with class cards (8th, 9th, 10th + other sections)
3. For 8th/9th/10th: Registration number input + OTP input form before showing material
4. For other sections: Direct study material listing
5. Admin panel to add/manage study materials per section
6. OTP is generated server-side, shown to admin or sent via display (since email is disabled)

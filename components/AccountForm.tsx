import { FormWrapper } from "./FormWrapper";

type AccountFormProps = {
    email: string,
    password: string,
    updateFields: (fields) => void
}

export function AccountForm({ email, password, updateFields}: AccountFormProps) {
    return (
        <FormWrapper title="Account Creation">
            <label htmlFor="email">Email</label>
            <input type="email" required autoFocus name="email" id="email" value={email} onChange={e => updateFields({email: e.target.value})} />
            <label htmlFor="">Password</label>
            <input type="password" required name="password" id="password" value={password} onChange={e => updateFields({password: e.target.value})} />
        </FormWrapper>
    );
}
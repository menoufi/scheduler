import { useUserState, signInWithGoogle, firebaseSignOut } from "../utilities/firebase";

const TermButton = ({ term, setTerm, checked }) => (
  <>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={checked}
      autoComplete="off"
      onChange={() => setTerm(term)}
    />
    <label className="btn btn-success m-1 p-2" htmlFor={term}>
      {term}
    </label>
  </>
);

const SignInButton = () => (
  <button className="btn btn-secondary btn-sm" onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOutButton = () => (
  <button className="btn btn-secondary btn-sm" onClick={() => firebaseSignOut()}>
    Sign Out
  </button>
);

const TermSelector = ({ term, setTerm }) => {
  const [user] = useUserState();
  return (
    <div className="btn-toolbar justify-content-between">
      <div className="btn-group">
        {["Fall", "Winter", "Spring"].map((value) => (
          <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
        ))}
      </div>
      {user ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default TermSelector;





import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="container">
        <h1>Oops!</h1>
        <p>
          It looks like you haven't completed an enrollment yet. Please go back
          to <Link to="/register">the enrollment page</Link> to register for a
          course.
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Thank You for Enrolling!</h1>

      <p>
        <strong>{state.name}</strong>, you have successfully enrolled in{" "}
        <strong>{state.course}</strong>.
      </p>

      <p>
        A confirmation email has been sent to <strong>{state.email}</strong>.
        Please check your inbox for further details.
      </p>

      <p>
        You can return to the <Link to="/diplomas">courses page</Link> to view
        other offerings or manage your enrollment.
      </p>
    </div>
  );
}

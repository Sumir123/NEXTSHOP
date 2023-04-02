const ErrorPage = () => {
  return (
    <div className="text-3xl font-bold text-center py-5 text-slate-800">
      <h1>An Error Occurred</h1>
      <h1>404 Page Not Found </h1>
      <span>Go back to </span>
      <a href="/" className="text-[#2563EB] underline">
        home
      </a>
    </div>
  );
};

export default ErrorPage;

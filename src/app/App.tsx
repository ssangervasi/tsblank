export const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundImage: `linear-gradient(
          to right bottom,
          hsl(288deg 90% 1% / 95%) 50%,
          hsl(288deg 90% 15% / 95%) 80%,
          hsl(288deg 90% 15% / 80%) 100%
        ), url(https://placekitten.com/1000/800)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <header style={{ padding: 10 }}>
        <h1>TS Blank</h1>
      </header>
    </div>
  );
};

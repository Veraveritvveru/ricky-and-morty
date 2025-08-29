function AppContainer() {
  return (
    <div className="сontainer">
      <header className="header">
        <h1>Pockemon</h1>
        <div className="serchBox"></div>
      </header>
      <main></main>
    </div>
  );
}

export default function App() {
  return (
    <>
      <AppContainer />
    </>
  );
}

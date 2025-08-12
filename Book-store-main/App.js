function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
function Profile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        src="images.jpeg"
        alt="Profile Picture"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}

function WarningButton() {
  return (
    <button onClick={() => { alert('Are you sure?'); }}>
      Don't Click Here
    </button>
  );
}

export default WarningButton;



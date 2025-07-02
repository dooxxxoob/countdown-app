function App() {
  const today = new Date();
  const endDate = new Date('2027-12-31');
  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formatDate = (date) =>
    date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>📅 今日：{formatDate(today)}</h1>
      <h2>🎯 2027年12月31日まで、あと {diffDays} 日</h2>
    </div>
  );
}

export default App;
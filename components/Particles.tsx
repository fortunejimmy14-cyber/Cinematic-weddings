export default function Particles() {
  const arr = Array.from({ length: 20 });
  return (
    <>
      {arr.map((_, i) => (
        <div
          key={i}
          className='particle'
          style={{
            left: Math.random() * 100 + '%',
            animationDuration: 5 + Math.random() * 5 + 's',
          }}
        />
      ))}
    </>
  );
}
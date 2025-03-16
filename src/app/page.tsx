import Todo from './components/Todo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          ✨ Todo List
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Stay organized and boost your productivity
        </p>
        <Todo />
      </div>
    </main>
  );
}

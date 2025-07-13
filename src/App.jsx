import Layout from "./components/Layout";
import Button from "./components/button";
import Card from "./components/card";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";

function App() {
  return (
    <Layout>
      <div className="bg-green-500 text-white p-4">
        Make your day easier with my TaskManager
        </div>
      <Card title="Welcome">
        <p>This is a sample card component.</p>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary" className="ml-2">Secondary Button</Button>
        <Button variant="danger" className="ml-2">Danger Button</Button>
      </Card>
      <TaskManager/>
      <ApiData/>
    </Layout>
  );
}

export default App;

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackState from "./components/FeedbackState.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";


const App = () => {
  return (
    <FeedbackProvider>
      <Header text="Feedback UI" />
      <div className="w-[60vw] pb-1 mb-2 bg-gray-800 mx-auto rounded">
        <FeedbackForm />
        <FeedbackState />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
};
export default App;

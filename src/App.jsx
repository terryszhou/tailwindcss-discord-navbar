import './App.css';
import { Sidebar } from './components/Sidebar';
import { ContentContainer } from './components/ContentContainer';
import { ChannelBar } from './components/ChannelBar';

export const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

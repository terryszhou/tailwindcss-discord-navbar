import './App.css';
import { Sidebar } from './components/Sidebar';
import { ContentContainer } from './components/ContentContainer';
import { ChannelBar } from './components/ChannelBar';

export const App = () => (
  <div className="flex">
    <Sidebar />
    <ChannelBar />
    <ContentContainer />
  </div>
);

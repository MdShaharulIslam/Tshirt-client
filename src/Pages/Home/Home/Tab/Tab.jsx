import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from '../Review/Reviews';

export default () => (
  <Tabs className="w-full">
    <TabList className="w-full">
      <Tab className="w-full">Title 1</Tab>
      <Tab className="w-full">Title 2</Tab>
    </TabList>

    <TabPanel className="w-full">
      <div className="w-full"><Reviews /></div>
    </TabPanel>
    <TabPanel className="w-full">
      <h2 className="w-full">Any content 2</h2>
    </TabPanel>
  </Tabs>
);

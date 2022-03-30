import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ActivityCalendar from '../pages/ActivityCalendar';
import ScheduledActivities from '../pages/ScheduledActivities';
import ScheduleActivity from '../pages/ScheduleActivity';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/activity-calendar" element={<ActivityCalendar />} />
        <Route path="/scheduled-activities" element={<ScheduledActivities />} />
        <Route path="/schedule-activity" element={<ScheduleActivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

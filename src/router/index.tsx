import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ActivityCalendar from '../pages/ActivityCalendar';
import ScheduleActivities from '../pages/ScheduleActivities';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/activity-calendar" element={<ActivityCalendar />} />
      <Route path="/schedule-activities" element={<ScheduleActivities />} />
    </Routes>
  );
}

export default Router;

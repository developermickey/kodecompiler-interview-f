import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3, Calendar, CheckCircle, Clock, CreditCard, Edit2, LogOut,
  MessageSquare, Plus, Settings, TrendingUp, Users, Zap, User, Bell
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@acmecorp.com',
    organization: 'Acme Corporation',
    profileImage: null
  });

  const [stats] = useState([
    { label: 'Interviews Conducted', value: '47', icon: MessageSquare, color: 'bg-blue-500' },
    { label: 'Candidates Screened', value: '156', icon: Users, color: 'bg-green-500' },
    { label: 'Completion Rate', value: '87%', icon: CheckCircle, color: 'bg-purple-500' },
    { label: 'Avg. Duration', value: '32 min', icon: Clock, color: 'bg-orange-500' }
  ]);

  const [upcomingInterviews] = useState([
    {
      id: 1,
      candidateName: 'John Doe',
      position: 'Frontend Developer',
      scheduled: '2024-02-14 2:00 PM',
      type: 'Video'
    },
    {
      id: 2,
      candidateName: 'Jane Smith',
      position: 'UI/UX Designer',
      scheduled: '2024-02-14 3:30 PM',
      type: 'Video'
    },
    {
      id: 3,
      candidateName: 'Mike Chen',
      position: 'Backend Developer',
      scheduled: '2024-02-15 10:00 AM',
      type: 'Code Challenge'
    }
  ]);

  const [recentActivity] = useState([
    { action: 'Completed interview with', name: 'John Doe', position: 'Frontend Developer', time: '2 hours ago', type: 'completed' },
    { action: 'Scheduled interview with', name: 'Jane Smith', position: 'UI/UX Designer', time: '1 day ago', type: 'scheduled' },
    { action: 'Purchased', name: '10 credits', position: '', time: '3 days ago', type: 'purchase' },
    { action: 'Invited team member', name: 'Mike Chen', position: 'Admin', time: '5 days ago', type: 'team' }
  ]);

  const [credits] = useState({
    available: 15,
    used: 47,
    total: 62
  });

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Interview Completed', description: 'You completed interview with John Doe', time: '2h ago', read: false },
    { id: 2, title: 'Credits Purchased', description: 'You purchased 10 credits', time: '1d ago', read: false },
    { id: 3, title: 'New Team Invite', description: 'Mike Chen joined your team', time: '3d ago', read: true }
  ]);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleLogout = () => {
    // Clear user session/token here
    navigate('/login');
  };

  const startNewInterview = () => {
    // Navigate to interview creation or scheduling page
    alert('Navigate to new interview creation');
  };

  const viewAnalytics = () => {
    navigate('/analytics');
  };

  const manageTeam = () => {
    navigate('/team-management');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {userData.name}!</p>
            </div>
            <div className="flex items-center gap-4 relative">
              <button
                onClick={() => navigate('/profile')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                title="Profile"
              >
                <User size={24} className="text-gray-600" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition relative"
                  title="Notifications"
                >
                  <Bell size={22} className="text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50">
                    <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                      <div className="font-medium text-gray-900">Notifications</div>
                      <div className="flex items-center gap-2">
                        <button onClick={markAllRead} className="text-sm text-gray-500 hover:text-gray-700">Mark all</button>
                        <button onClick={() => setNotificationsOpen(false)} className="text-sm text-gray-400 hover:text-gray-600">Close</button>
                      </div>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {notifications.length === 0 && (
                        <div className="p-4 text-center text-gray-500">No notifications</div>
                      )}
                      {notifications.map((n) => (
                        <div key={n.id} className={`px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition ${n.read ? '' : 'bg-gray-50'}`}>
                          <div className="flex-shrink-0">
                            <Zap size={18} className="text-orange-500" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <div className="font-medium text-gray-900">{n.title}</div>
                              <div className="text-xs text-gray-400">{n.time}</div>
                            </div>
                            <div className="text-sm text-gray-600">{n.description}</div>
                          </div>
                          {!n.read && (
                            <button onClick={() => markAsRead(n.id)} className="ml-2 text-sm text-blue-600">Mark</button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                title="Logout"
              >
                <LogOut size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={startNewInterview}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 group"
          >
            <Plus size={28} className="group-hover:rotate-90 transition-transform" />
            <div className="text-left">
              <div className="font-semibold">Start New Interview</div>
              <div className="text-blue-100 text-sm">Schedule or begin now</div>
            </div>
          </button>

          <button
            onClick={viewAnalytics}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 group"
          >
            <BarChart3 size={28} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold">View Analytics</div>
              <div className="text-purple-100 text-sm">Performance insights</div>
            </div>
          </button>

          <button
            onClick={manageTeam}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 group"
          >
            <Users size={28} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold">Manage Team</div>
              <div className="text-green-100 text-sm">Invite & manage members</div>
            </div>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Interviews */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={24} className="text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
              </div>
              <div className="divide-y divide-gray-100">
                {upcomingInterviews.length > 0 ? (
                  upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="px-6 py-4 hover:bg-gray-50 transition flex items-center justify-between cursor-pointer group">
                      <div className="flex-grow">
                        <div className="font-semibold text-gray-900">{interview.candidateName}</div>
                        <div className="text-sm text-gray-600">{interview.position}</div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Clock size={14} />
                          {interview.scheduled}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {interview.type}
                        </span>
                        <button className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium transition-opacity">
                          Join
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center">
                    <Calendar size={32} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No upcoming interviews scheduled</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Credits & Info */}
          <div className="space-y-6">
            {/* Credits Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Interview Credits</h3>
                <CreditCard size={24} />
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">{credits.available}</div>
                <p className="text-blue-100 text-sm">Credits Available</p>
              </div>
              <div className="bg-blue-500 bg-opacity-50 rounded-lg p-3 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-100">Used this month</span>
                  <span className="font-semibold">{credits.used} / {credits.total}</span>
                </div>
                <div className="w-full bg-blue-400 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2"
                    style={{ width: `${(credits.used / credits.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Buy More Credits
              </button>
            </div>

            {/* Organization Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Organization</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Organization Name</p>
                  <p className="font-medium text-gray-900">{userData.organization}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="font-medium text-gray-900 text-sm break-all">{userData.email}</p>
                </div>
                <button onClick={() => navigate('/profile')} className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <Edit2 size={16} />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <Zap size={24} className="text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="text-gray-900">
                        <span className="font-medium">{activity.action}</span>{' '}
                        <span className="text-blue-600 font-semibold">{activity.name}</span>
                        {activity.position && (
                          <>
                            {' '}
                            <span className="text-gray-600">for position</span>{' '}
                            <span className="text-blue-600 font-semibold">{activity.position}</span>
                          </>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{activity.time}</div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.type === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : activity.type === 'scheduled'
                          ? 'bg-blue-100 text-blue-700'
                          : activity.type === 'purchase'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {activity.type === 'completed' && 'Completed'}
                      {activity.type === 'scheduled' && 'Scheduled'}
                      {activity.type === 'purchase' && 'Purchase'}
                      {activity.type === 'team' && 'Team'}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-500">No recent activity</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

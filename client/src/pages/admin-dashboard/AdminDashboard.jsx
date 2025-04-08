import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalNgos: 0,
        totalReports: 0,
        activeCases: 0,
    });

    const [recentReports, setRecentReports] = useState([]);

    useEffect(() => {
        // Fetch dashboard data from your API
        const fetchDashboardData = async () => {
            try {
                const response = await fetch('/api/admin/dashboard', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                    },
                });
                const data = await response.json();
                setStats(data.stats);
                setRecentReports(data.recentReports);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    const handleAction = async (reportId, action) => {
        try {
            const response = await fetch(`/api/admin/reports/${reportId}/${action}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                },
            });
            if (response.ok) {
                // Refresh the dashboard data
                const updatedResponse = await fetch('/api/admin/dashboard', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                    },
                });
                const data = await updatedResponse.json();
                setStats(data.stats);
                setRecentReports(data.recentReports);
            }
        } catch (error) {
            console.error('Error performing action:', error);
        }
    };

    return (
        <motion.div
            className="admin-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="dashboard-header">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Admin Dashboard
                </motion.h1>
            </div>

            <div className="stats-grid">
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3>Total Users</h3>
                    <p>{stats.totalUsers}</p>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Total NGOs</h3>
                    <p>{stats.totalNgos}</p>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3>Total Reports</h3>
                    <p>{stats.totalReports}</p>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3>Active Cases</h3>
                    <p>{stats.activeCases}</p>
                </motion.div>
            </div>

            <div className="recent-reports">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Recent Reports
                </motion.h2>
                <div className="reports-grid">
                    {recentReports.map((report, index) => (
                        <motion.div
                            key={report.id}
                            className="report-card"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 * index }}
                        >
                            <div className="report-header">
                                <h3>{report.title}</h3>
                                <span className={`status ${report.status}`}>{report.status}</span>
                            </div>
                            <p className="report-description">{report.description}</p>
                            <div className="report-meta">
                                <span>Reported by: {report.reporter}</span>
                                <span>Date: {new Date(report.date).toLocaleDateString()}</span>
                            </div>
                            <div className="report-actions">
                                <button
                                    className="action-button approve"
                                    onClick={() => handleAction(report.id, 'approve')}
                                >
                                    Approve
                                </button>
                                <button
                                    className="action-button reject"
                                    onClick={() => handleAction(report.id, 'reject')}
                                >
                                    Reject
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AdminDashboard; 
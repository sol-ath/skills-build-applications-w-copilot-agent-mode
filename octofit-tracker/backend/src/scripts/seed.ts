import mongoose from 'mongoose';

import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  { name: 'Mina Patel', email: 'mina.patel@example.com', role: 'runner', team: 'Solar Sprinters' },
  { name: 'Jon Bell', email: 'jon.bell@example.com', role: 'cyclist', team: 'Lunar Lifters' },
  { name: 'Avery Chen', email: 'avery.chen@example.com', role: 'coach', team: 'Solar Sprinters' },
];

const teams = [
  { name: 'Solar Sprinters', city: 'Austin', coach: 'Avery Chen', memberCount: 12 },
  { name: 'Lunar Lifters', city: 'Seattle', coach: 'Riley Morgan', memberCount: 9 },
  { name: 'Trail Blazers', city: 'Denver', coach: 'Sam Rivera', memberCount: 15 },
];

const activities = [
  {
    user: 'Mina Patel',
    type: 'Morning Run',
    durationMinutes: 42,
    caloriesBurned: 430,
    completedAt: new Date('2026-09-28T13:00:00.000Z'),
  },
  {
    user: 'Jon Bell',
    type: 'Hill Cycling',
    durationMinutes: 58,
    caloriesBurned: 610,
    completedAt: new Date('2026-09-29T18:30:00.000Z'),
  },
  {
    user: 'Avery Chen',
    type: 'Strength Circuit',
    durationMinutes: 35,
    caloriesBurned: 320,
    completedAt: new Date('2026-09-30T11:15:00.000Z'),
  },
];

const leaderboard = [
  { user: 'Mina Patel', team: 'Solar Sprinters', points: 1840, rank: 1 },
  { user: 'Jon Bell', team: 'Lunar Lifters', points: 1725, rank: 2 },
  { user: 'Avery Chen', team: 'Solar Sprinters', points: 1590, rank: 3 },
];

const workouts = [
  {
    title: 'Tempo Run Builder',
    focusArea: 'endurance',
    difficulty: 'intermediate',
    durationMinutes: 45,
    recommendedFor: ['runner', 'coach'],
  },
  {
    title: 'Core Stability Reset',
    focusArea: 'core',
    difficulty: 'beginner',
    durationMinutes: 25,
    recommendedFor: ['runner', 'cyclist'],
  },
  {
    title: 'Climb Power Intervals',
    focusArea: 'cycling strength',
    difficulty: 'advanced',
    durationMinutes: 50,
    recommendedFor: ['cyclist'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

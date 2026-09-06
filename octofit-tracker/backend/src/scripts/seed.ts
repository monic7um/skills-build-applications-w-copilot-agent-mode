import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Ada Lovelace', email: 'ada@octofit.test', avatar: 'AL' },
      { name: 'Grace Hopper', email: 'grace@octofit.test', avatar: 'GH' },
      { name: 'Katherine Johnson', email: 'katherine@octofit.test', avatar: 'KJ' },
    ]);

    const teams = await Team.insertMany([
      { name: 'Code Runners', motto: 'Ship strong', members: [users[0]._id, users[1]._id] },
      { name: 'Orbit Crew', motto: 'Aim higher', members: [users[2]._id] },
    ]);

    await Activity.insertMany([
      { userId: users[0]._id, type: 'Run', durationMinutes: 32, calories: 280, completedAt: new Date('2026-09-05') },
      { userId: users[1]._id, type: 'Strength', durationMinutes: 45, calories: 340, completedAt: new Date('2026-09-04') },
      { userId: users[2]._id, type: 'Cycle', durationMinutes: 55, calories: 410, completedAt: new Date('2026-09-03') },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id, points: 920, rank: 1 },
      { userId: users[1]._id, points: 780, rank: 2 },
      { userId: users[2]._id, points: 645, rank: 3 },
    ]);

    await Workout.insertMany([
      { name: 'Morning Momentum', focus: 'Full body', difficulty: 'Beginner', durationMinutes: 20, exercises: ['Squats', 'Push-ups', 'Plank'] },
      { name: 'Core Circuit', focus: 'Core', difficulty: 'Intermediate', durationMinutes: 30, exercises: ['Dead bug', 'Bicycle crunch', 'Side plank'] },
    ]);

    console.log(`Seeded ${users.length} users, ${teams.length} teams, 3 activities, 3 leaderboard entries, and 2 workouts`);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

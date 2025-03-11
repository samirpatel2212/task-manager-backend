import {v4 as uuidv4} from 'uuid';
import { Task } from './types';

const generateRandomTask = (id: string): Task => {
    const titles = ['Meeting', 'Code Review', 'Bug Fix', 'Design', 'Documentation', 'Testing', 'Deployment', 'Research', 'Planning', 'Brainstorming'];
    const descriptions = ['Discuss project status', 'Review code changes', 'Fix critical bug', 'Create UI mockups', 'Write user guides', 'Run unit tests', 'Deploy to production', 'Explore new technologies', 'Plan next sprint', 'Generate new ideas'];
    const priorities = ['LOW', 'MEDIUM', 'HIGH'];
    const statuses = ['TODO', 'IN_PROGRESS', 'COMPLETED'];
  
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomPriority = priorities[Math.floor(Math.random() * priorities.length)] as Task['priority'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)] as Task['status'];
  
    const randomDueDate = new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000);
    const randomCreatedAt = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);
    const randomUpdatedAt = new Date(randomCreatedAt.getTime() + Math.random() * (randomDueDate.getTime() - randomCreatedAt.getTime()));
  
    return {
      id: id,
      title: randomTitle,
      description: randomDescription,
      priority: randomPriority,
      status: randomStatus,
      dueDate: randomDueDate,
      createdAt: randomCreatedAt,
      updatedAt: randomUpdatedAt,
    };
  }  

export const initializeTasksMap = (globalTasks: Map<string,Task>) => {
    for(let i=0; i<=100; i++) {
        const id = uuidv4();
        globalTasks.set(id, generateRandomTask(id));
    }
};

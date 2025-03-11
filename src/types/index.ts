export interface Task {
    id: string;
    title: string;
    description?: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
    dueDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }
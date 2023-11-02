export type TaskCategory = 'work' | 'education' | 'hobby' | 'sport' | 'other';
export type TaskEstimation = 1 | 2 | 3 | 4 | 5;

export type TaskPriority = 'urgent' | 'hight' | 'middle' | 'low' ;

export interface Task {
  id?: number;
  title: string;
  description: string;
  category: TaskCategory;
  deadline: string;
  estimation: TaskEstimation;
  priority: TaskPriority;
}
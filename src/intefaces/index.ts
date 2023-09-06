export interface IPayload {
  commits: ICommit[];
}

export interface IRepo {
  id: number;
  name: string;
  url: string;
}
export interface IEvent {
  type: string;
  repo: IRepo;
  payload: IPayload;
  created_at: string;
}
export interface ICommit {
  id: string;
  message: string;
  timestamp: string;
  created_at: string;
}

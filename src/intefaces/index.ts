export interface IPayload {
  commits: ICommit[];
}

export interface IEvent {
  type: string;
  payload: IPayload;
  created_at: string;
}
export interface ICommit {
  message: string;
  timestamp: string | number;
  url: string;
}

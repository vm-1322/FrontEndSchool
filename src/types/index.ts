export interface ICourse {
  id: string;
  title: string;
  lessonsCount: number;
  rating: number;
  skills: string[];
  previewImageLink: string;
  courseVideoPreview: {
    link: string;
    duration: number;
    previewImageLink: string;
  };
  description?: string;
  lessons?: Array<ILesson>;
}

export interface ILesson {
  id: string;
  title: string;
  duration: number;
  status: string;
  link: string;
  order: number;
  previewImageLink: string;
}

export enum Direction {
  Left = -1,
  Right = +1,
}

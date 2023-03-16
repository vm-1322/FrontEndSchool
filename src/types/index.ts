export interface ICourse {
  id?: string;
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
}

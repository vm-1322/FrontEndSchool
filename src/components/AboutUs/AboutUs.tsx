import ReactPlayer from 'react-player';

import {
  AboutUsStyled,
  AboutUsStyledInfo,
  AboutUsStyledVideo,
} from './AboutUsStyled';

const AboutUs: React.FC = () => {
  return (
    <AboutUsStyled>
      <AboutUsStyledInfo>
        <div>Дивись</div>
        <div>на освіту</div>
        <div>ширше</div>
      </AboutUsStyledInfo>
      <AboutUsStyledVideo>
        <ReactPlayer
          url={
            'https://video.wixstatic.com/video/676f5c_20ddbb0ec9d542508c9c89c39eb4b931/480p/mp4/file.mp4'
          }
          playing
          loop
          width='100%'
          height='100%'
        />
      </AboutUsStyledVideo>
    </AboutUsStyled>
  );
};

export default AboutUs;

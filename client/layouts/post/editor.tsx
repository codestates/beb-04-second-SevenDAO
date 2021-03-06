import { FunctionComponent } from 'react';
import EditCategory from '../../components/edit/Tag';
import EditContents from '../../components/edit/Contents';
import EditTitle from '../../components/edit/Title';
import EditWrapper from '../../components/edit/Wrapper';
import EditTop from '../../components/edit/Top';
import { css } from '@emotion/react';

interface PostEditProps {}

const PostEditor: FunctionComponent<PostEditProps> = () => {
  const coverStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px;
  `;

  return (
    <div css={coverStyle}>
      <EditWrapper>
        <EditTop></EditTop>
        <EditCategory></EditCategory>
        <EditTitle></EditTitle>
        <EditContents></EditContents>
      </EditWrapper>
    </div>
  );
};

export default PostEditor;

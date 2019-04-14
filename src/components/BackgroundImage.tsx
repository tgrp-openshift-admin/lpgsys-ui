import bgImageSrcFilter from '@patternfly/patternfly/assets/images/background-filter.svg';
import bgImageSrcLg from '@patternfly/patternfly/assets/images/pfbg_1200.jpg';
import bgImageSrcXs from '@patternfly/patternfly/assets/images/pfbg_576.jpg';
import bgImageSrcXs2x from '@patternfly/patternfly/assets/images/pfbg_576@2x.jpg';
import bgImageSrcSm from '@patternfly/patternfly/assets/images/pfbg_768.jpg';
import bgImageSrcSm2x from '@patternfly/patternfly/assets/images/pfbg_768@2x.jpg';
import { BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import * as React from 'react';

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */
const bgImages = {
  [BackgroundImageSrc.lg]: bgImageSrcLg,
  [BackgroundImageSrc.sm]: bgImageSrcSm,
  [BackgroundImageSrc.sm2x]: bgImageSrcSm2x,
  [BackgroundImageSrc.xs]: bgImageSrcXs,
  [BackgroundImageSrc.xs2x]: bgImageSrcXs2x,
  [BackgroundImageSrc.filter]: bgImageSrcFilter + "#image_overlay"
};

class LpgsysBackgroundImage extends React.Component {
  public render() {
    return <BackgroundImage src={bgImages} />;
  }
};

export default LpgsysBackgroundImage;
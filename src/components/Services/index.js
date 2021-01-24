import React from 'react';

import Icon1 from '../../assets/reduce.svg';
import Icon2 from '../../assets/world.svg';
import Icon3 from '../../assets/premium.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './styles';

const Services = ({ id }) => {
  return (
    <React.Fragment>
      <ServicesContainer id={id}>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that return 5% cashback.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </React.Fragment>
  );
};

export default Services;
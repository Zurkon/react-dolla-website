import Car from '../../assets/car.svg';
import Data from '../../assets/data.svg';
import Bank from '../../assets/bank.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: Car,
  alt: 'Car',
  darkButtonText: true,
  primary: true
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Bank,
  alt: 'Bank',
  darkButtonText: false,
  primary: false
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  topLine: 'Join our team',
  headline: 'Creating an account is extremely easy',
  description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you\'re ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: Data,
  alt: 'Data',
  darkButtonText: false,
  primary: false
};
import * as React from 'react';
import { isFn, isNum, isStr } from '../utils/propValidator';

const Svg = ({ theme, type, children }) => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
  >
    {children}
  </svg>
);

function Warning(props) {
  return (
    <Svg {...props}>
      <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" />
    </Svg>
  );
}

function Info(props) {
  return (
    <Svg {...props}>
      <path d="M12 0C11.1688 0 10.5125 0.612476 10.5125 1.38123C10.5125 1.41873 10.5125 1.44995 10.5188 1.4812C7.4438 1.94995 4.1438 4.03123 4.1438 10.1312C4.1438 17.2437 2.375 18.0062 0 20.0062H24C21.6375 18 19.8562 17.2313 19.8562 10.1188C19.8562 4.01878 16.575 1.9437 13.5062 1.4812C13.5062 1.44995 13.5125 1.41873 13.5125 1.38123C13.5125 0.612476 12.8312 0 12 0ZM8.78125 21.3125C8.95625 22.7562 10.3375 24 12.0125 24C13.6874 24 15.0625 22.7562 15.2438 21.3125H8.78125Z" />
      <path d="M22 4C23.1046 4 24 3.10457 24 2C24 0.895431 23.1046 0 22 0C20.8954 0 20 0.895431 20 2C20 3.10457 20.8954 4 22 4Z" fillOpacity="0.65" />
    </Svg>
  );
}

function Success(props) {
  return (
    <Svg {...props}>
      <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" />
    </Svg>
  );
}

function Error(props) {
  return (
    <Svg {...props}>
      <path d="M11.983 -7.11135e-06C8.77657 0.0524852 5.71963 1.36471 3.47297 3.65299C2.34885 4.77217 1.46192 6.10651 0.865189 7.57624C0.268462 9.04598 -0.0258068 10.6209 -2.85204e-05 12.207C-0.00187299 13.7568 0.302135 15.2917 0.894574 16.7238C1.48701 18.1559 2.35623 19.457 3.45242 20.5525C4.54861 21.648 5.85022 22.5165 7.28266 23.1081C8.71509 23.6997 10.2502 24.0028 11.8 24H12.014C15.2213 23.967 18.2846 22.663 20.5317 20.3741C22.7788 18.0852 24.0261 14.9984 24 11.791C24.0037 10.2224 23.6937 8.66892 23.0882 7.22188C22.4828 5.77485 21.5941 4.46348 20.4745 3.3649C19.3548 2.26632 18.0268 1.4027 16.5686 0.824835C15.1103 0.246971 13.5512 -0.0334736 11.983 -7.11135e-06ZM10.5 16.542C10.4928 16.3459 10.5247 16.1504 10.594 15.9668C10.6632 15.7832 10.7684 15.6153 10.9033 15.4728C11.0382 15.3304 11.2002 15.2162 11.3797 15.1371C11.5593 15.058 11.7528 15.0155 11.949 15.012H11.976C12.3706 15.0128 12.7496 15.1662 13.0335 15.4403C13.3174 15.7143 13.4842 16.0877 13.499 16.482C13.5063 16.6781 13.4745 16.8737 13.4053 17.0573C13.336 17.241 13.2309 17.409 13.096 17.5515C12.961 17.6939 12.799 17.8081 12.6194 17.8871C12.4398 17.9662 12.2462 18.0087 12.05 18.012H12.023C11.6285 18.0107 11.2498 17.8571 10.966 17.5831C10.6822 17.3092 10.5152 16.9362 10.5 16.542ZM11 12.5V6.49999C11 6.23478 11.1053 5.98042 11.2929 5.79289C11.4804 5.60535 11.7348 5.49999 12 5.49999C12.2652 5.49999 12.5195 5.60535 12.7071 5.79289C12.8946 5.98042 13 6.23478 13 6.49999V12.5C13 12.7652 12.8946 13.0196 12.7071 13.2071C12.5195 13.3946 12.2652 13.5 12 13.5C11.7348 13.5 11.4804 13.3946 11.2929 13.2071C11.1053 13.0196 11 12.7652 11 12.5Z" />
    </Svg>
  );
}

export const Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error
};

const maybeIcon = (type) => type in Icons;

export function getIcon(toast) {
  let { type, icon } = toast
  let Icon = null;
  const iconProps = { type };

  if (icon === false) {
    // hide
  } else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if (isStr(icon) || isNum(icon)) {
    Icon = icon;
  } else if (maybeIcon(type)) {
    Icon = Icons[type]();
  }

  return Icon;
}
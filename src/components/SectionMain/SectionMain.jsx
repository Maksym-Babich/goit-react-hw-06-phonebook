import PropTypes from 'prop-types';
import {
  HtmlSectionMain,
  TitleMain,
} from 'components/SectionMain/SectionMain.styled';

export function SectionMain({ title, children }) {
  return (
    <HtmlSectionMain>
      <TitleMain>{title}</TitleMain>
      {children}
    </HtmlSectionMain>
  );
}

SectionMain.propTypes = {
  title: PropTypes.string.isRequired,
};

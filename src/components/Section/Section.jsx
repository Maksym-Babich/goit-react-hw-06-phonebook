import PropTypes from 'prop-types';
import { HtmlSection, Title } from 'components/Section/Section.styled';

export function Section({ title, children }) {
  return (
    <HtmlSection>
      <Title>{title}</Title>
      {children}
    </HtmlSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

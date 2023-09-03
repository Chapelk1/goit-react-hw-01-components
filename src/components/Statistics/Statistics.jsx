import PropTypes from 'prop-types';
import {
  Section,
  Li,
  StatList,
  SectionName,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({stats, title}) => {
  return (
    <Section >
      {title && <SectionName>{title}</SectionName>}

      <StatList>
        {stats.map(stat => {
          return (
            <Li key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage} %</Percentage>
            </Li>
          );
        })}
      </StatList>
    </Section>
  );
};


Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object,),
}
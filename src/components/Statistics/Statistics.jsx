import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
import { Section, Li} from 'components/Statistics/Statistics.styled';

export const Statistics = ({stats, title}) => {
  return (
    <Section >
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <Li key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage} %</span>
            </Li>
          );
        })}
      </ul>
    </Section>
  );
};


Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object,),
}
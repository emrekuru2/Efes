import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Elegantly Designed ',
    paragraph: 'Its our top priority to deliver top quality food to you. That is why we have wide range of options. Here is our menu down below'
  };

  const foods = {
    appetizers : {
      cold : [
        { title : 'Hummus', description : 'Flavourful puree of chickpeas, tahini, garlic and lemon', price : '$7'},
        { title : 'Spinach', description : 'Yogurt, pureed spinach with olive oil and garlic', price : '$7'},
        { title : 'Dolma', description : 'Grape leaves stuffed with rice and currant', price : '$7'},
        { title : 'Red pepper puree ', description : 'Roasted red peppers, olive oil, parsley and feta', price : '$7'},
        { title : 'Lentil kofte ', description : 'Flavourful puree of chickpeas, tahini, garlic and lemon', price : '$7'},
        { title : 'Eggplant saute', description : 'Cubed eggplant in a tangy house-made tomato sauce', price : '$7'},
        { title : 'Cacik ', description : 'Strained yogurt with cucumber, infused with garlic and mint', price : '$7'},
        { title : 'Mutabbel ', description : 'Pureed roasted eggplant with olive oil, tahini, garlic, and yogurt', price : '$7'}
      ],
      hot : [
        { title : 'Halloumi', description : 'Grilled slices of Turkish goat cheese', price : '$11'},
        { title : 'Falafel', description : 'Golden fried fritters of ground chickpeas, spices, garlic, and fresh cilantro and parsley', price : '$8'},
        { title : 'Cheese borek', description : 'Deep fried phyllo pastry filled with feta cheese and parsley', price : '$8'},
        { title : 'Kiymali ', description : 'Warm hummus with spicy minced lamb', price : '$10'},
        { title : 'Lamb liver', description : 'Diced and pan fried with cumin and oregano\n', price : '$10'},
        { title : 'Shrimp guvech', description : 'Cooked in an eggplant tomato sauce', price : '$10'},
        { title : 'Lentil soup', description : 'Pureed red lentils, onion, and mint', price : '$6'},
        { title : 'Special Meze Plate', description : 'Chef\'s selection of cold and hot appetizers', price : '$13'},
      ]
    },
    salads : [
      { title : 'Turkish Salad', description : 'Tomato, cucumber, red onions, bell peppers, parsley with Turkish herb vinaigrette', price : '$10'},
      { title : 'Feta cheese salad', description : 'Turkish salad with finely grated feta cheese', price : '$10'},
      { title : 'Beet salad', description : 'Roasted beets, mixed greens, goat cheese, toasted walnuts, red onions, with a Nova Scotia maple syrup vinaigrette', price : '$11'},
      { title : 'Mediterranean salad', description : 'Spinach, cucumber, onion, red and green peppers, and goat cheese', price : '$10'},
    ],
    wraps : {
      vegetarian : [
        { title : 'Lentil kofte wrap', description : 'Red lentil patties, bulgur, and fresh herbs', price : '$12'},
        { title : 'Falafel wrap', description : 'Fried chickpea fritters, herbs, and spices', price : '$12'},
        { title : 'Halloumi wrap', description : 'Grilled Turkish goat cheese and chilli sauce', price : '$13'}
      ],
      meat : [
        { title : 'Chicken wrap', description : 'Tender grilled chicken, marinated in milk and garlic', price : '$13'},
        { title : 'Lamb shish wrap', description : 'Marinated local lamb skewer', price : '$13'},
        { title : 'Kofte wrap', description : 'Grilled minced lamb with fresh herbs and spices', price : '$13'},
        { title : 'Spicy chicken wrap', description : 'Grilled minced chicken with fresh herbs and spices', price : '$13'},
      ]
    },
    main : [
      { title : 'Lamb shish kebab', description : 'Tender cubes of lamb marinated in herbs and olive oil', price : '$22'},
      { title : 'Kofte kebab', description : 'Minced lamb blended with special mix of herbs and spices', price : '$21'},
      { title : 'Chicken kebab', description : 'Chicken cubes marinated in milk, olive oil and garlic', price : '$21'},
      { title : 'Spicy chicken kebab', description : 'Grilled minced chicken with peppers and a mix of herbs and spices', price : '$21'},
      { title : 'Yogurt kebab', description : 'Lamb and chicken on a bed of toasted pita, served with tangy yogurt and tomato sauce', price : '$22'},
      { title : 'Halep kebab', description : 'Lamb and chicken on a bed of toasted pita, served with an eggplant sauce', price : '$22'},
      { title : 'Seafood kebab', description : 'Grilled shrimp and scallops, marinated in garlic, herbs and olive oil', price : '$22'},
      { title : 'Lamb chops', description : 'Seasoned with herbs and grilled to perfection', price : '$24'},
      { title : 'Beyti kebab', description : 'Grilled medallions of lamb tenderloin', price : '$24'},
      { title : 'Mixed kebab', description : 'Chef\'s selection of cuts of lamb and chicken, great way to sample a variety of grilled meats', price : '$24'},
      { title : 'Lamb kidneys', description : 'Fresh lamb\'s kidneys, grilled to perfection', price : '$18'},
      { title : 'Moussaka', description : 'Layered minced lamb, eggplant, potato, bechamel sauce and cheese', price : '$20'},
      { title : 'Veggie Platter', description : 'Chef\'s selection of hot and cold vegetarian items', price : '$19'},
    ],
    deserts : [
      { title : 'Baklava', description : 'Phyllo pastry filled with walnuts', price : '$7'},
    ]
  };

  const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

      console.log(`key: ${key}, value: ${obj[key]}`)

      if (typeof obj[key] === 'object') {
        iterate(obj[key])
      }
    })
  }


  const menu = Object.values(foods).map((key, index) =>
    <div className="split-item">
      <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
        <div className="text-xxs text-color-warning fw-600 tt-u mb-8">

        </div>
        <h3 className="mt-0 mb-12">
          {Object.values(foods.appetizers.cold[index].title)}
        </h3>
        <p className="m-0">
          {foods.appetizers.cold[index].description}
        </p>
      </div>
      <div className={
        classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
        )}
           data-reveal-container=".split-item">
        <Image
            src={require('./../../assets/images/features-split-image-01.png')}
            alt="Features split 01"
            width={528}
            height={396} />
      </div>
    </div>
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="menu">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {menu}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
import { App, defineComponent, PropType } from 'vue';
import Icon from '../icon';
import { IconName } from '../icon';
import './index.less';

export type ItemType = 'default' | 'menu' | 'dropdown' | 'select' | 'tabbar';

const Item = defineComponent({
  name: 'bar-item',
  components: { Icon },
  props: {
    type: { type: String, default: 'default' },
    icon: String as PropType<IconName>,
    onClick: Function as PropType<(event: MouseEvent) => void>,
  },
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const renderItem = () => {
      if (props.type === 'default')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            {slots}
          </div>
        );
      if (props.type === 'dropdown')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            {slots.icon
              ? slots.icon()
              : props.icon && <Icon name={props.icon} size="sm" />}
            <span>{slots}</span>
          </div>
        );

      if (props.type === 'select')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            <span>{slots}</span>
          </div>
        );

      if (props.type === 'tabbar')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            <span class="bar-item-icon">
              {slots.icon
                ? slots.icon()
                : props.icon && <Icon name={props.icon} size="sm" />}
            </span>
            <span>{slots}</span>
          </div>
        );
    };

    return () => renderItem();
  },
});

Item.install = (app: App) => {
  app.component(Item.name, Item);
};

export default Item;
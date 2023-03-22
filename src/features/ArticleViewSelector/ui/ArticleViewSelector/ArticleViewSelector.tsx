import {
    type FC,
    type FunctionComponent,
    memo,
    type SVGAttributes,
} from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleViewSelector.module.scss'
import { type ArticleListViewMode } from 'entities/Article'
import TilledIcon from 'shared/assets/icons/tiled-24-24.svg'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import { Button } from '../../../../shared/ui/Button'
import { Icon } from '../../../../shared/ui/Icon'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleListViewMode
    onChange: (mode: ArticleListViewMode) => void
}

const viewTypes: Array<{
    view: ArticleListViewMode
    icon: FunctionComponent<SVGAttributes<SVGElement>>
}> = [
    { view: 'tile', icon: TilledIcon },
    { view: 'list', icon: ListIcon },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props) => {
        const { className, view, onChange } = props

        return (
            <div
                className={classNames(classes.articleViewSelector, {}, [
                    className,
                ])}
            >
                {viewTypes.map((item) => {
                    const handleClick = () => {
                        onChange(item.view)
                    }

                    return (
                        <Button
                            key={item.view}
                            theme="clear"
                            onClick={handleClick}
                        >
                            <Icon
                                className={classNames(classes.icon, {
                                    [classes.active]: view === item.view,
                                })}
                                Svg={item.icon}
                            />
                        </Button>
                    )
                })}
            </div>
        )
    }
)
ArticleViewSelector.displayName = 'ArticleViewSelector'

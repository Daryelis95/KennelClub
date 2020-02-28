<div ng-controller="MenuCtrl">
    <aside class="al-sidebar" ng-swipe-right="$baSidebarService.setMenuCollapsed(false)" ng-swipe-left="$baSidebarService.setMenuCollapsed(true)"
           ng-mouseleave="hoverElemTop=selectElemTop">
        <ul class="al-sidebar-list" slimscroll="{height: '@{{menuHeight}}px'}" slimscroll-watch="menuHeight" >
            <li class="al-sidebar-list-item" ng-repeat="item in menu" ng-class="{'with-sub-menu': true}">
                <a href="@{{ item.href }}" class="al-sidebar-list-link">
                    <i class="@{{item.icon}}"></i>
                    <span>@{{item.title}}</span>
                    <b class="fa fa-angle-down" ui-sref-active="fa-angle-up" ng-if="item.subMenu"></b>
                </a>
                <ul class="al-sidebar-sublist" ng-if="item.subMenu">
                    <li class="ba-sidebar-sublist-item" ng-repeat="subItem in item.subItems">
                        <a href="@{{ subItem.href }}" class="al-sidebar-list-link subitem-submenu-link">@{{subItem.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="sidebar-hover-elem" ng-style="{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}"
             ng-class="{'show-hover-elem': showHoverElem }"></div>
    </aside>
</div>


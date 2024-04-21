import React from 'react';

const SVG_Body_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M6.6773 1.50427C7.32668 1.16806 8.0928 1.17242 8.7355 1.475L8.99947 1.59928C9.18219 1.6853 9.34341 1.81733 9.46345 1.98687C10.6624 3.68031 13.3376 3.68031 14.5365 1.98687L15.1487 2.42025L15.1883 2.44834M15.1487 2.42025L14.5365 1.98687C14.5365 1.98687 14.5365 1.98687 14.5365 1.98687C14.6566 1.81733 14.8178 1.6853 15.0005 1.59928L15.2645 1.475C15.9072 1.17242 16.6733 1.16806 17.3227 1.50427C17.9087 1.80765 18.7808 2.28186 19.4014 2.72707C19.5702 2.8482 19.7413 2.98198 19.9099 3.12147L19.9544 3.15822C20.4404 3.56011 20.8753 3.91975 21.1786 4.2712C21.5195 4.66635 21.7537 5.11643 21.75 5.6953C21.7461 6.29469 21.4721 6.7572 21.1071 7.15758C20.772 7.52524 20.2909 7.9135 19.7373 8.36016L19.4863 8.56281C18.8776 9.05406 18.7702 9.1623 18.7137 9.27794C18.6604 9.38698 18.6428 9.52059 18.6428 10.2771V15.5403C18.6428 15.5757 18.6428 15.6107 18.6428 15.6453C18.6434 16.2432 18.6438 16.724 18.4748 17.1777C18.307 17.6282 17.992 17.9983 17.5949 18.4648C17.5719 18.4918 17.5487 18.5191 17.5252 18.5468L15.1437 21.3497C15.1178 21.3803 15.092 21.4107 15.0665 21.4408C14.6701 21.9088 14.3274 22.3134 13.8401 22.5339C13.3588 22.7517 12.8216 22.751 12.186 22.7501C12.1452 22.7501 12.1039 22.75 12.0623 22.75H11.9377C11.8961 22.75 11.8548 22.7501 11.814 22.7501C11.1784 22.751 10.6412 22.7517 10.1599 22.5339C9.67255 22.3134 9.32987 21.9088 8.93345 21.4408C8.90796 21.4107 8.88225 21.3803 8.85626 21.3497L6.47478 18.5468C6.45129 18.5191 6.42805 18.4918 6.40509 18.4648C6.00805 17.9983 5.69302 17.6282 5.5252 17.1777C5.35616 16.724 5.3566 16.2432 5.35716 15.6453C5.35719 15.6107 5.35722 15.5757 5.35722 15.5403V10.2771C5.35722 9.52059 5.33956 9.38698 5.28629 9.27793C5.22981 9.1623 5.12242 9.05406 4.51374 8.56281L4.30641 8.39547C4.29177 8.38366 4.27718 8.37189 4.26264 8.36016C3.70913 7.9135 3.22799 7.52523 2.89287 7.15758C2.52793 6.7572 2.2539 6.29469 2.25004 5.6953C2.24632 5.11643 2.48047 4.66635 2.82145 4.2712C3.12473 3.91974 3.55966 3.56009 4.04567 3.1582C4.06043 3.146 4.07524 3.13375 4.0901 3.12147C4.25875 2.98198 4.42977 2.8482 4.59862 2.72707C5.2192 2.28186 6.09132 1.80765 6.6773 1.50427M8.09657 2.83212C7.85656 2.71913 7.58236 2.7248 7.36695 2.83633C6.7852 3.13752 5.99782 3.56935 5.47299 3.94587C5.33825 4.04253 5.19486 4.15431 5.04612 4.27733C4.50166 4.72765 4.16766 5.00714 3.95709 5.25116C3.77501 5.46217 3.74929 5.57408 3.75001 5.68564C3.7506 5.77669 3.77429 5.89789 4.00145 6.1471C4.24963 6.41937 4.6384 6.73583 5.24848 7.22821L5.45582 7.39555C5.48773 7.42131 5.51944 7.44681 5.55089 7.4721C6.00806 7.83979 6.4118 8.16451 6.63409 8.61958C6.85938 9.0808 6.85843 9.59306 6.85737 10.1594C6.85729 10.1984 6.85722 10.2376 6.85722 10.2771V15.5403C6.85722 16.2949 6.86807 16.4856 6.93083 16.6541C6.99489 16.826 7.11767 16.9868 7.61791 17.5755L9.99938 20.3785C10.5176 20.9885 10.637 21.1034 10.7783 21.1674C10.9262 21.2343 11.1097 21.25 11.9377 21.25H12.0623C12.8903 21.25 13.0738 21.2343 13.2217 21.1674C13.363 21.1034 13.4824 20.9885 14.0006 20.3785L16.3821 17.5755C16.8823 16.9868 17.0051 16.826 17.0692 16.6541C17.1319 16.4856 17.1428 16.2949 17.1428 15.5403V10.2771C17.1428 10.2376 17.1427 10.1984 17.1426 10.1594C17.1416 9.59306 17.1406 9.0808 17.3659 8.61958C17.5882 8.1645 17.9919 7.83978 18.4491 7.4721C18.4806 7.4468 18.5123 7.42131 18.5442 7.39555L18.7515 7.22821C19.3616 6.73583 19.7504 6.41937 19.9986 6.1471C20.2257 5.89789 20.2494 5.77669 20.25 5.68564C20.2507 5.57408 20.225 5.46217 20.0429 5.25116C19.8323 5.00714 19.4983 4.72765 18.9539 4.27733C18.8051 4.15431 18.6618 4.04253 18.527 3.94587C18.0022 3.56935 17.2148 3.13752 16.633 2.83633C16.4176 2.7248 16.1434 2.71913 15.9034 2.83212L15.7108 2.9228C13.909 5.36833 10.091 5.36833 8.28919 2.92281L8.09657 2.83212Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Body_Outline;

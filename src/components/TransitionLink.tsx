import type { MouseEvent, ReactNode } from "react";
import {
  Link,
  NavLink,
  type LinkProps,
  type NavLinkProps,
  useNavigate,
} from "react-router-dom";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
  };
};

function shouldHandleNavigation(event: MouseEvent<HTMLAnchorElement>) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function useViewTransitionNavigation() {
  const navigate = useNavigate();

  return (event: MouseEvent<HTMLAnchorElement>, to: LinkProps["to"]) => {
    if (!shouldHandleNavigation(event)) {
      return;
    }

    event.preventDefault();

    const transitionDocument = document as ViewTransitionDocument;

    if (transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(() => {
        navigate(to);
      });
      return;
    }

    navigate(to);
  };
}

type TransitionLinkProps = Omit<LinkProps, "to"> & {
  children: ReactNode;
  to: LinkProps["to"];
};

export function TransitionLink({
  children,
  onClick,
  to,
  ...props
}: TransitionLinkProps) {
  const navigateWithTransition = useViewTransitionNavigation();

  return (
    <Link
      {...props}
      to={to}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || props.target) {
          return;
        }

        navigateWithTransition(event, to);
      }}
    >
      {children}
    </Link>
  );
}

type TransitionNavLinkProps = Omit<NavLinkProps, "to"> & {
  children: ReactNode;
  to: NavLinkProps["to"];
};

export function TransitionNavLink({
  children,
  onClick,
  to,
  ...props
}: TransitionNavLinkProps) {
  const navigateWithTransition = useViewTransitionNavigation();

  return (
    <NavLink
      {...props}
      to={to}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || props.target) {
          return;
        }

        navigateWithTransition(event, to);
      }}
    >
      {children}
    </NavLink>
  );
}

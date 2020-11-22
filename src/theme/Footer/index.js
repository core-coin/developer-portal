import React from 'react';
import classnames from 'classnames';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function FooterLink({to, href, label, ...props}) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  const {copyright = {}, links = [], logo = {}} = footer || {};

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <section className="sitemap">
        <div className="footer__block back">
          <a href="https://coreblockchain.cc">❮ Core Blockchain</a>
        </div>
        {links && links.length > 0 && links.map((linkItem, i) => (
            <div key={i} className="footer__block">
              {linkItem.title != null ? (
                <h4 className="footer__title">{linkItem.title}</h4>
              ) : null}
              {linkItem.items != null &&
              Array.isArray(linkItem.items) &&
              linkItem.items.length > 0 ? (
                <ul className="footer__items">
                  {linkItem.items.map((item, key) =>
                    item.html ? (
                      <li
                        key={key}
                        className="footer__item"
                        dangerouslySetInnerHTML={{
                          __html: item.html,
                        }}
                      />
                    ) : (
                      <li key={item.href || item.to} className="footer__item">
                        <FooterLink {...item} />
                      </li>
                    ),
                  )}
                </ul>
              ) : null}
            </div>
          ))}
        <div className="footer__block copyright">
          <a href="/contributors/license">{copyright}</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

# RELEASE 15.0.0

## Passed

---

- analytics-detail-iphone8.spec.js
- analytics-detail.spec.js
- incidents-feed.js
- overview.spec.js
- twitter-feed.spec.js

---

## Failed

- detail.iphone8.spec.js
- detail.spec.js

---

### **cypress/integration/traffic-europe/detail.iphone8.spec.js**

```js
it('Should only contain a twitter feed and a button to open the map on a iphone-8', () => {
  TrafficEuropeActions.assertIphone8ViewportDefaults()
})
```

### cypress/actions/trafficEuropeActions.js:83:48

**Timed out retrying after 10000ms: cy.wait() timed out waiting 10000ms for the 1st request to the route: europeTwitterFeed. No request ever occurred.**

```js
const setupDetailSpec = () => {
  mockIncidentsEuropeFeed()
  mockTwitterFeed()

  cy.visit(trafficEuropeDeUrl)
  // Timed out retrying after 10000ms: cy.wait() timed out waiting 10000ms for the 1st request to the route: europeTwitterFeed. No request ever occurred.
  cy.wait('@europeIncidentsFeed').then(() =>
    cy.wait('@europeTwitterFeed')
  )
}
```

---

### cypress/integration/traffic-europe/detail.spec.js

**Timed out retrying after 10000ms: cy.wait() timed out waiting 10000ms for the 1st request to the route: europeTwitterFeed. No request ever occurred.**

```js
it('Should contain correct headings and a text link that leads back to the traffic abroad landing page', () => {
  TrafficEuropeActions.assertCmsContent()
})
```

### **cypress/actions/trafficEuropeActions.js:83:48**

```js
const setupDetailSpec = () => {
  mockIncidentsEuropeFeed()
  mockTwitterFeed()

  cy.visit(trafficEuropeDeUrl)
  // Timed out retrying after 10000ms: cy.wait() timed out waiting 10000ms for the 1st request to the route: europeTwitterFeed. No request ever occurred.
  cy.wait('@europeIncidentsFeed').then(() =>
    cy.wait('@europeTwitterFeed')
  )
}
```

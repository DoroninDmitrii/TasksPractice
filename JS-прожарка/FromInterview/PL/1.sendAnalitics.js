class AnalyticsEventClient {
  constructor(dataUrl, interval) {
    this.dataUrl = dataUrl;
    this.interval = interval;
    this.eventQueue = [];
    this.startSending(); 
  }

  queueEvent(event) {
    this.eventQueue.push({
      ...event,
      timestams: Date.now()
    })
  }

  sendNow() {
    if (this.eventQueue.length === 0) return;

    fetch(this.dataUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json'
      },
      body: JSON.stringify(this.eventQueue)
    })
    .then(response => {
      if (response.ok) {
        console.log('Events sent successfully:', this.eventQueue);
        this.eventQueue = [];
      } else {
        console.error('Failed to send events:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error sending events:', error);
    })
  }
  startSending() {
    setInterval(() => {
      this.sendNow();
    }, this.interval);
  }
}

const analyticsClient = new AnalyticsEventClient('url', 2000);

analyticsClient.queueEvent({
  type: 'click',
  version: 1,
  args: { elementId: 'button-1' }
});

analyticsClient.queueEvent({
  type: 'scroll',
  version: 1,
  args: { scrollDepth: 300 }
});

// analyticsClient.sendNow();

console.log(analyticsClient);

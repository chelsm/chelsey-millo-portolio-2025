import mixpanel from 'mixpanel-browser';

const useMixPanel = () => {
  mixpanel.init('d7d43ebbbf2554a252aefef365a5ec4f', {
    autocapture: true,
    record_sessions_percent: 100,
  });
  return mixpanel;
};

export default useMixPanel;

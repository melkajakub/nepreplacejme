import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureEvent } from "@/lib/posthog";

const RouteAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    captureEvent("route_viewed", {
      path: pathname,
      query: search || undefined,
    });
  }, [pathname, search]);

  return null;
};

export default RouteAnalytics;

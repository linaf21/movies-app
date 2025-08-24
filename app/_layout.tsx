import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { nowPlayingAction } from "../core/actions/movies/now-playing.action";
import "../global.css";

const RootLayout = () => {
  nowPlayingAction();

  // gestor de estados de tareas asíncronas
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
};

export default RootLayout;

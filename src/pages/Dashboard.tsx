import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const stats = [
    { title: "Публикаций сегодня", value: "12", icon: "FileText", change: "+3" },
    { title: "Запланировано", value: "24", icon: "Calendar", change: "+5" },
    { title: "Активных каналов", value: "3", icon: "Radio", change: "0" },
    { title: "Просмотров за неделю", value: "8.4K", icon: "Eye", change: "+12%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Дашборд</h1>
        <p className="text-muted-foreground mt-1">Общая статистика вашего контент-завода</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon name={stat.icon} className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change} от вчера
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Активность по платформам</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Icon name="Send" className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Telegram</p>
                  <p className="text-sm text-muted-foreground">8 публикаций</p>
                </div>
              </div>
              <span className="text-sm font-medium">67%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Icon name="Rss" className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium">Яндекс.Дзен</p>
                  <p className="text-sm text-muted-foreground">3 публикации</p>
                </div>
              </div>
              <span className="text-sm font-medium">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Icon name="Mic" className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Дипспик</p>
                  <p className="text-sm text-muted-foreground">1 публикация</p>
                </div>
              </div>
              <span className="text-sm font-medium">8%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Последние публикации</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Новые тренды в маркетинге", time: "2 часа назад", platform: "Telegram" },
              { title: "Как увеличить вовлеченность", time: "5 часов назад", platform: "Дзен" },
              { title: "Советы по копирайтингу", time: "7 часов назад", platform: "Telegram" },
            ].map((post, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <Icon name="FileText" className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{post.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {post.platform} • {post.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
